
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [showBanner, setShowBanner] = useState(true); // 👈 manage visibility

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoCircle}>
        <Text style={styles.logoText}>LOGO</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileRow}>
        <View style={styles.profileInfo}>
          <Ionicons name="person-circle-outline" size={36} color="#3E4A5A" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.name}>Hi, Name</Text>
            <Text style={styles.verifyText}>Verify your account</Text>
          </View>
        </View>

        {/* Placeholder Box */}
        <View style={styles.placeholderBox} />
      </View>

      <View style={{ flex: 1 }} />

      {/* 👇 Verify Banner */}
      {showBanner && (
        <View style={styles.verifyBanner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.verifyTitle}>Verify Account</Text>
            <Text style={styles.verifyDescription}>
              Get full access to all Respondere services, get verified now!
            </Text>
          </View>

          {/* Verify Now Button */}
          <TouchableOpacity
            style={styles.verifyBtn}
            onPress={() => router.push('/verify/verify-start')}
          >
            <Text style={styles.verifyBtnText}>Verify Now ➤</Text>
          </TouchableOpacity>

          {/* ❌ Dismiss Button */}
          <TouchableOpacity onPress={() => setShowBanner(false)} style={styles.dismiss}>
            <Ionicons name="close-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBFC',
    padding: 24,
  },
  logoCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D0D7DF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    color: '#3E4A5A',
    fontWeight: 'bold',
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#FE712D',
    fontWeight: 'bold',
    fontSize: 14,
  },
  verifyText: {
    fontSize: 12,
    color: '#5B6B7F',
  },
  placeholderBox: {
    width: 60,
    height: 40,
    borderRadius: 6,
    borderColor: '#999',
    borderWidth: 1,
  },
  verifyBanner: {
    backgroundColor: '#4B6176',
    borderRadius: 10,
    padding: 16,
    paddingRight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 80,
    position: 'relative',
  },
  verifyTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  verifyDescription: {
    color: '#fff',
    fontSize: 12,
  },
  verifyBtn: {
    backgroundColor: '#FE712D',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 12,
  },
  verifyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  dismiss: {
    position: 'absolute',
    top: 6,
    right: 6,
    padding: 4,
  },
});
