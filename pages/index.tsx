import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { init } from 'onfido-sdk-ui'
import {  initOnfidoSDK } from '../service/onfido.service.js'
import { Check, Onfido, Region, OnfidoApiError } from '@onfido/api'
import axios from 'axios'

let onfido = new Onfido({ apiToken: 'api_sandbox.ePzR2uC5ci4.B1FwjnUb8xCc7Fx1OTlhAIYhzaDIQNFM', region: Region.EU })




export default function Home() {
  return (
    <><button onClick={() => init({
      token:"eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NjgwOTAyNDIsInBheWxvYWQiOnsiYXBwIjoiODAyMWY1NzQtMDRlNS00OTRjLWI4M2QtNGViMWNhNmE5OWMxIiwiY2xpZW50X3V1aWQiOiJhYWEyMTc2Ni02Y2ZmLTRiOTItOWNlYy1kMGQ0MmZhNWRmOTIiLCJpc19zYW5kYm94Ijp0cnVlLCJpc190cmlhbCI6dHJ1ZSwic2FyZGluZV9zZXNzaW9uIjoiYWI2NDI3N2YtOGFmNi00Mzk3LTlmOTUtZmRmMTljYjkzMzI3In0sInV1aWQiOiJlUHpSMnVDNWNpNCIsInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGIAkIB-nOs7xfzhLW2V2bIoV2xFQJwqbKzLHo4_YvAksMo1ZcwSHsOPSB7tBHxE8oKlnWYmc4gyqgjS2F0jAKjXy8Y9EgCQgEcPls6OWEX-Iz3gh-Eb9wPRqaC11o6B25TYB5Vs7TJHQtjRJ6g2pIQUQtOwXjnc7c8--kUfs7mIbaKwtXA1kM_7Q",
      containerId: "onfido-mount",
      onComplete: async (data) => {
          try { 
            axios.post('http://localhost:3001/onfido/check', data)
          }
          catch (error) {
            console.log(error)
          }
      },
      steps: [
        {
          type: 'welcome',
          options: {
            title: 'Welcome to 0xKYC',
            descriptions: [
              'We need to verify your identity to ensure you are a real person.',
              'This will only take a few minutes.',
              'Please make sure you have a valid ID document and a selfie ready.',
            ],
            nextButton: 'SunScreen ☀️',
          }
        },
         "poa", "document", "face", "complete"
      ],
    }) }>Start</button><div id="onfido-mount"></div></>
  )
}
