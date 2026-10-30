<?php
require __DIR__ . '/config.php';
$action = $_GET['action'] ?? '';
try {
    if ($action === 'health') respond(['ok'=>true,'database'=>'connected']);
    if ($action === 'register') {
        $b=body(); $u=clean($b['username']??''); $email=filter_var($b['email']??'',FILTER_VALIDATE_EMAIL); $p=$b['password']??'';
        if(mb_strlen($u)<3 || !$email || strlen($p)<6) respond(['ok'=>false,'message'=>'Bilgileri kontrol et (şifre en az 6 karakter).'],422);
        $q=db()->prepare('INSERT INTO users(username,email,password_hash) VALUES(?,?,?)'); $q->execute([$u,$email,password_hash($p,PASSWORD_DEFAULT)]);
        $id=(int)db()->lastInsertId(); db()->prepare('INSERT INTO player_profiles(user_id) VALUES(?)')->execute([$id]); $_SESSION['user_id']=$id;
        respond(['ok'=>true,'user'=>['id'=>$id,'username'=>$u]]);
    }
    if ($action === 'login') {
        $b=body(); $q=db()->prepare('SELECT * FROM users WHERE email=?'); $q->execute([clean($b['email']??'')]); $u=$q->fetch();
        if(!$u || !password_verify($b['password']??'',$u['password_hash'])) respond(['ok'=>false,'message'=>'E-posta veya şifre yanlış.'],401);
        $_SESSION['user_id']=(int)$u['id']; db()->prepare('UPDATE users SET last_login=NOW() WHERE id=?')->execute([$u['id']]); respond(['ok'=>true,'user'=>['id'=>$u['id'],'username'=>$u['username']]]);
    }
    if ($action === 'logout') { session_destroy(); respond(['ok'=>true]); }
    if ($action === 'me') {
        if(empty($_SESSION['user_id'])) respond(['ok'=>true,'user'=>null]); $q=db()->prepare('SELECT id,username,email FROM users WHERE id=?');$q->execute([$_SESSION['user_id']]);respond(['ok'=>true,'user'=>$q->fetch()]);
    }
    if ($action === 'save') {
        $id=user_id();$b=body();$slot=max(1,min(3,(int)($b['slot']??1)));$state=json_encode($b['state']??[],JSON_UNESCAPED_UNICODE);$night=max(1,(int)($b['state']['night']??1));
        $q=db()->prepare('INSERT INTO game_saves(user_id,save_slot,game_state,current_night) VALUES(?,?,?,?) ON DUPLICATE KEY UPDATE game_state=VALUES(game_state),current_night=VALUES(current_night),updated_at=NOW()');$q->execute([$id,$slot,$state,$night]);
        $s=$b['settings']??null;if($s){$q=db()->prepare('UPDATE users SET settings_json=? WHERE id=?');$q->execute([json_encode($s,JSON_UNESCAPED_UNICODE),$id]);} respond(['ok'=>true,'message'=>'Oyun kaydedildi.']);
    }
    if ($action === 'load') {
        $id=user_id();$slot=max(1,min(3,(int)($_GET['slot']??1)));$q=db()->prepare('SELECT game_state,updated_at FROM game_saves WHERE user_id=? AND save_slot=?');$q->execute([$id,$slot]);$s=$q->fetch();
        if(!$s) respond(['ok'=>false,'message'=>'Bu alanda kayıt yok.'],404);respond(['ok'=>true,'state'=>json_decode($s['game_state'],true),'updated_at'=>$s['updated_at']]);
    }
    if ($action === 'settings') {
        $id=user_id(); if($_SERVER['REQUEST_METHOD']==='POST'){ $b=body();db()->prepare('UPDATE users SET settings_json=? WHERE id=?')->execute([json_encode($b,JSON_UNESCAPED_UNICODE),$id]);respond(['ok'=>true]); }
        $q=db()->prepare('SELECT settings_json FROM users WHERE id=?');$q->execute([$id]);$r=$q->fetch();respond(['ok'=>true,'settings'=>json_decode($r['settings_json']?:'{}',true)]);
    }
    respond(['ok'=>false,'message'=>'Geçersiz işlem.'],404);
} catch(PDOException $e){ $duplicate=$e->getCode()==='23000'; respond(['ok'=>false,'message'=>$duplicate?'Bu kullanıcı adı veya e-posta zaten kullanılıyor.':'Veritabanı hatası. database.sql dosyasını içe aktardığından emin ol.'],500); }

