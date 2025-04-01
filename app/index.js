import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Top section */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardImage} />
        <Text style={styles.appName}>App Name</Text>
        <Text style={styles.description}>
          dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
        </Text>
      </View>

      {/* Dots */}
      <View style={styles.dots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Spacer to push button down */}
      <View style={{ flex: 1 }} />

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/register')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
    padding: 24,
    justifyContent: 'space-between',
  },
  
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D0D7DF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  logoText: {
    color: '#3E4A5A',
    fontWeight: 'bold',
  },
  card: {
    borderWidth: 1,
    borderColor: '#D0D7DF',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
    minHeight: 350, // ⬅️ This gives it the vertical space like in your image
  },
  
  
  cardImage: {
    width: 180,
    height: 100,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    marginBottom: 16,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    textAlign: 'center',
    color: '#3E4A5A',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32, // ⬅️ pushes dots upward from the button
  },
  
  activeDot: {
    backgroundColor: '#0077C8',
  },
  button: {
    backgroundColor: '#FE712D',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12, // ⬅️ Optional if you want some space above phone nav bar
  },
  
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});