import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const BarScreen = () => {
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    const fetchDataFromDatabase = async () => {
      try {
        // Открываем базу данных
        const db = SQLite.openDatabase({
          name: 'BARKoktel.db',
          location: 'file:///Users/arsenii_degtiarev/Mobile/SoltApp/SoltApp/assets',
        });

        // Проверяем, открылась ли база данных успешно
        if (!db) {
          console.error('Не удалось открыть базу данных');
          return;
        }

        // Выполняем транзакцию
        db.transaction((tx) => {
          tx.executeSql(
            'SELECT * FROM BaR',
            [],
            (tx, results) => {
              const rows = results.rows;
              const barArray = [];

              if (rows) {
                for (let i = 0; i < rows.length; i++) {
                  const item = rows.item(i);
                  barArray.push(item);
                }
              }

              setBarData(barArray);
            },
            (error) => {
              console.error('SQL Error:', error);
              Alert.alert('Ошибка', `Не удалось выполнить SQL-запрос: ${error}`);
            }
          );
        });
      } catch (error) {
        console.error('Ошибка при открытии базы данных:', error);
        Alert.alert('Ошибка', `Не удалось открыть базу данных: ${error}`);
      }
    };

    fetchDataFromDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Экран Бара</Text>
      {barData.map((item) => (
        <Text key={item.id}>{item.name}</Text>
        // Добавьте отображение других данных, если необходимо
      ))}
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