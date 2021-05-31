<template>
  <div>
    <h1>
    </h1>
    <div v-if="cityInfo">{{ cityInfo }}
        <div v-for="item in cityInfo" :key="item.ID">
            名前:{{ item.name.String }}<button @click="ShowData(item.id)" >ShowData</button>
            <div class="district" v-if="item.id == tmpID">
                {{ item.district.String }}{{ item.ID }}{{ tmpID }}
            </div><div v-else></div>
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
    const cityInfo = ref();
    const tmpID = ref(-1);
    onMounted(async () => {
        console.log(props.CountryID)
        console.log("aaa")
        const res = await axios.get("/api/citiesfromcountry/" + props.CountryID)
        console.log(res.data)
        cityInfo.value = res.data;
    })
    
    const ShowData = (id) =>{
        tmpID.value = id;
    };
    return { cityInfo , ShowData,tmpID}
  }
};
</script>