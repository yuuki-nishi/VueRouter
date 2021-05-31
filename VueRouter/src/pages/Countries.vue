<template>
    <div>
        <h1>
            {{ countryName }}
        </h1>
        <div v-if="countryInfo">
            <div v-for="item in countryInfo" :key="item.ID">
                名前:<router-link to=`/citiesfromcountry`>{{ item.name.String }}</router-link>
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
  name: "Countries",
  setup(props) {
    const countryInfo = ref()
    onMounted(async () => {
        const res = await axios.get("/api/allcountry")
        countryInfo.value = res.data;
    })
    const ShowCities = (id) =>{
        axios.get("/api/citiesfromcountry/"+ id);
    };
    return { countryInfo,ShowCities }
  },
};
</script>