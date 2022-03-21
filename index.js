const express = require('express');
const k8s = require('@kubernetes/client-node');
const app = express();
app.use(express.json());


const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

app.get('/test', (req, res ) => {
    this.shouldIncrease = true;
    let counter = 0;
    while(this.shouldIncrease) {
      counter = counter * counter + 2500;
    }
})
app.listen(5200, () => console.log(`Backend started successfully on 5200`))
module.exports = app;