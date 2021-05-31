<template>
  <div>
    <h1>
        {{ cityName }}
    </h1>
    <div v-if="cityInfo">{{ cityInfo }}
        <div v-for="item in cityInfo" :key="item.ID">
            名前:<router-link :to="`/citiesfromcountry/${item.ID.String}`">{{ item.name.String }}</router-link>
            <!--ここまでが各要素の記述-->
        </div>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from 'vue'

export default {
  name: "Cities",
  setup(props) {
    const cityInfo = ref()
    onMounted(async () => {
        const res = await axios.get("/api/citiesfromcountry/" + props.CountryID)
        cityInfo.value = res.data;
    })
    return { cityInfo }
  }
};
</script>