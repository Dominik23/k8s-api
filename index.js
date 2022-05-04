const express = require('express');
const k8s = require('@kubernetes/client-node');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
const axios = require('axios')
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

app.get('/pods', async (req, res) => {
  k8sApi.listNamespacedPod('default').then((result) => {
    return res.status(200).send(JSON.stringify(result.body));
  });
});

app.listen(5200, () => console.log(`Backend started successfully on 5200`))
module.exports = app;
