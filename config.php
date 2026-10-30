<?php
declare(strict_types=1);
session_start();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function env_values(): array {
    $file = dirname(__DIR__) . '/.env'; $out = [];
    if (is_file($file)) foreach (file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) continue;
        [$k,$v] = array_map('trim', explode('=', $line, 2)); $out[$k] = $v;
    }
    return $out;
}
function db(): PDO {
    static $pdo; if ($pdo) return $pdo; $e = env_values();
    $dsn = sprintf('mysql:host=%s;port=%s;dbname=%s;charset=utf8mb4', $e['DB_HOST']??'localhost', $e['DB_PORT']??'3306', $e['DB_NAME']??'barkodda_bela');
    $pdo = new PDO($dsn, $e['DB_USER']??'root', $e['DB_PASS']??'', [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC]);
    return $pdo;
}
function body(): array { return json_decode(file_get_contents('php://input'), true) ?: $_POST; }
function respond(array $data, int $code=200): never { http_response_code($code); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }
function user_id(): int { if (empty($_SESSION['user_id'])) respond(['ok'=>false,'message'=>'Oturum gerekli'],401); return (int)$_SESSION['user_id']; }
function clean(string $v): string { return trim(strip_tags($v)); }

