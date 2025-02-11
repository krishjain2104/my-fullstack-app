import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MySQLExample {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/my_database"; 
    private static final String DB_USER = "root"; 
    private static final String DB_PASSWORD = "1234";

    public static void main(String[] args) {
        // Initialize connection
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            System.out.println("Connected to the database!");

            createTable(connection);

            insertData(connection, "admin_test", "5f4dcc3b5aa765d61d8327deb882cf99", "admin");
            insertData(connection, "basic_test_user", "482c811da5d5b4bc6d497ffe98491e38", "basic");
            insertData(connection, "lakshya", "5f4dcc3b5aa765d61d8327deb882cf99", "basic");
            insertData(connection, "user1", "8233fe8dc0533c6ebbb717e7fd7a2833c", "basic");
            insertData(connection, "user2", "5f4dcc3b5aa765d61d8327deb882cf99", "basic");
          
        } catch (SQLException e) {
            System.out.println("Error connecting to the database");
        }
    }

    private static void createTable(Connection connection) throws SQLException {
        String createTableSQL = """
            CREATE TABLE IF NOT EXISTS users (
                userid VARCHAR(255) PRIMARY KEY,
                password_hash VARCHAR(255) NOT NULL,
                role VARCHAR(50) NOT NULL
            );
        """;
        try (PreparedStatement statement = connection.prepareStatement(createTableSQL)) {
            statement.execute();
            System.out.println("Table created successfully!");
        }
    }

    private static void insertData(Connection connection, String userid, String passwordHash, String role) throws SQLException {
        String insertSQL = "INSERT INTO users (userid, password_hash, role) VALUES (?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(insertSQL)) {
            statement.setString(1, userid);
            statement.setString(2, passwordHash);
            statement.setString(3, role);
            statement.executeUpdate();
            System.out.println("Data inserted successfully for user: " + userid);
        }
    }
}
