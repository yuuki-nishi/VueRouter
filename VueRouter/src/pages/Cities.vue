<template>
  <div>
    <h1>
    </h1>
    <div v-if="cityInfo">{{ cityInfo }}
        <div v-for="item in cityInfo" :key="item.ID">
            名前:<router-link :to="`/citiesfromcountry/${item.ID.int}`">{{ item.Name.String }}</router-link>
            <!--ここまでが各要素の記述-->
        </div>
    </div>
    <div v-else>街が見つかりませんでしたaaa</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from 'vue'

export default {
  name: "Cities",
  props: {
    CountryID: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const cityInfo = ref()
    onMounted(async () => {
        const res = await axios.get("/api/citiesfromcountry/" + props.CountryID)
        console.log(res.data)
        cityInfo.value = res.data;
    })
    return { cityInfo }
  }
};
</script>