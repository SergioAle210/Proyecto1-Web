CREATE USER IF NOT EXISTS 'sergio'@'%' IDENTIFIED BY 'serch';
GRANT ALL PRIVILEGES ON basketball_blog_db.* TO 'sergio'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE TABLE
    IF NOT EXISTS blog_posts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        home_team VARCHAR(255) NOT NULL,
        away_team VARCHAR(255) NOT NULL,
        home_score INT,
        away_score INT,
        image_url TEXT NOT NULL
    );