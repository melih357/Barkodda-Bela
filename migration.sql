USE barkodda_bela;
-- Eski kurulumları güvenle güncellemek için phpMyAdmin'de bir kez çalıştırın.
ALTER TABLE users ADD COLUMN IF NOT EXISTS settings_json JSON NULL AFTER password_hash;
-- Temiz kurulumda uq_save indeksi database.sql tarafından zaten oluşturulur.
-- v4 maaş, ekipman, görev ve disiplin verileri game_saves.game_state JSON alanında saklanır;
-- mevcut kurulum için ek tablo veya veri kaybına yol açacak değişiklik gerekmez.
