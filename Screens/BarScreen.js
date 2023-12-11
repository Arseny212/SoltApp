import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const BarScreen = () => {
  useEffect(() => {
    // Открываем базу данных
    const db = SQLite.openDatabase({ name: 'goods.db', location: './www/goods.db'});

    if (!db) {
      console.error('Не удалось открыть базу данных');
      return;
    }

    // Запускаем транзакцию для выполнения SQL-запроса
    db.transaction((tx) => {
      // Ваш SQL-запрос
      tx.executeSql('SELECT * FROM customers', [], (tx, results) => {
        const rows = results.rows;

        if (rows && rows.length > 0) {
          for (let i = 0; i < rows.length; i++) {
            const item = rows.item(i);
            console.log(item);
          }
        } else {
          console.log('Нет данных в базе данных');
        }
      },
      (error) => {
        console.error('Ошибка SQL:', error);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Экран Бара</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BarScreen;