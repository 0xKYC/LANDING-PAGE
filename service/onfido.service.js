const { Onfido } = require("@onfido/api");
import { init } from "onfido-sdk-ui";

const onfido = new Onfido({
  apiToken: "api_sandbox.ePzR2uC5ci4.B1FwjnUb8xCc7Fx1OTlhAIYhzaDIQNFM",
  environment: "sandbox",
  region: "EU",
});

export function getOnfidoToken() {
  return axios.get("/onfido/token");
}

export async function createOnfidoApplicant() {
  let self = this;
  const generateSdkToken = await onfido.sdkToken.generate({
    applicantId: "07ba489a-b531-4527-b04e-f3d579c24c1b",
  });
  return generateSdkToken;
}

//init onfido sdk
export async function initOnfidoSDK() {
  let self = this;
  const onfidoOut = document.getElementById("onfido-mount");
  // const onfidoSdkToken = await createOnfidoApplicant();
  const onfidoSdk = init({
    token:
      "eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2NjgwMDU0MjYsInBheWxvYWQiOnsiYXBwIjoiMDdiYTQ4OWEtYjUzMS00NTI3LWIwNGUtZjNkNTc5YzI0YzFiIiwiY2xpZW50X3V1aWQiOiJhYWEyMTc2Ni02Y2ZmLTRiOTItOWNlYy1kMGQ0MmZhNWRmOTIiLCJpc19zYW5kYm94Ijp0cnVlLCJpc190cmlhbCI6dHJ1ZSwic2FyZGluZV9zZXNzaW9uIjoiNDc0ODYwY2UtYzQwMS00MzJhLTk2MTMtOTU3ZmU1NWJkZDBhIn0sInV1aWQiOiJlUHpSMnVDNWNpNCIsInVybHMiOnsiZGV0ZWN0X2RvY3VtZW50X3VybCI6Imh0dHBzOi8vc2RrLm9uZmlkby5jb20iLCJzeW5jX3VybCI6Imh0dHBzOi8vc3luYy5vbmZpZG8uY29tIiwiaG9zdGVkX3Nka191cmwiOiJodHRwczovL2lkLm9uZmlkby5jb20iLCJhdXRoX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJvbmZpZG9fYXBpX3VybCI6Imh0dHBzOi8vYXBpLm9uZmlkby5jb20iLCJ0ZWxlcGhvbnlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSJ9fQ.MIGHAkIA7hh1xuQqdcr-98uZ7qK40x8e2TbwLgURPR-UIVPGTnC6eS61OFTb-oxrDS8-Lf139v5XMhDukxhA80Qwdnpq9oICQWe7w6U2v2AVZ7WV0rQKSBuXDT4RJiuzFFTAp0JOIs8mlbSnCGnZXT0Apan1nUAhoCRu3o-HzGy1eEqqXHqvF8Ja",
    containerId: "onfido-mount",
    onComplete: function (data) {
      console.log(data);
    },
    steps: ["welcome", "poa", "document", "face", "complete"],
  });
  return onfidoSdk;
}

//get onfido sdk tok

export async function createOnfidoCheck(applicantId) {
  const r = fetch("https://api.onfido.com/v3/checks", {
    method: "POST",
    headers: {
      Authorization: "Token token=<YOUR_API_TOKEN>",
    },
    body: new URLSearchParams({
      applicant_id: applicantId,
      report_names: ["identity", "document"],
    }),
  });
  return r;
}

export async function createOnfidoReport(checkId) {
  const r = fetch("https://api.onfoido.com/v3/reports", {
    method: "POST",
    headers: {
      Authorization: "Token token=<YOUR_API_TOKEN>",
    },
    body: new URLSearchParams({
      check_id: checkId,
      name: "document",
    }),
  });
  return r;
}
