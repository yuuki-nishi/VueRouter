<template>
  <div>
    <button @click="sendGet">GET</button>
    <button @click="sendPost">POST</button>
    <button @click="sendPut">PUT</button>
    <button @click="sendDelete">DELETE</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Axios",
  setup() {
    const tmpaxios = "/api/"
    const sendGet = () => axios.get(tmpaxios);
    const sendPost = () => axios.post(tmpaxios, {
      traQID: "temma",
      grade: 19,
    });
    const sendPut = () => axios.put(tmpaxios, {
      testData: { string: "string", number: 1 },
    });
    const sendDelete = () => axios.delete(tmpaxios, {
      data: { po: 1 },
    });
    return {
      sendGet,
      sendPost,
      sendPut,
      sendDelete,
    };
  },
};
</script>