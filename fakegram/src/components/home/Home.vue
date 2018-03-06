<template>
  <div class="main">
    <p v-show="msg" class="msg">{{ msg }}</p>
    <input type="search"
      class="search"
      placeholder="Filter by picture title"
      @input="filter = $event.target.value"
    />
    <ul class="pictures-list">
      <li class="picture" v-for="p of filteredPictures" :key="p._id">
        <panel-for-picture :title="p.title" >
          <!-- <responsive-img
            :src="p.url"
            :alt="p.title"
            v-rotate:zoom-out.animate="{deg: -45}"
            class="image"
          /> -->
          <responsive-img
            :src="p.url"
            :alt="p.title"
            v-zoom
            class="image"
          />
          <p class="description">{{ p.description }}</p>
          <div class="panel-actions">
            <router-link :to="{name: 'edit', params: {id: p._id}}" >
              <btn class="btn-edit">Alterar</btn>
            </router-link>
            <btn clazz="danger" confirm=true @click="destroyPicture(p)">
              Remover
            </btn>
          </div>
        </panel-for-picture>
      </li>
    </ul>
  </div>
</template>

<script>
import PanelForPicture from "../shared/panel-for-picture/PanelForPicture.vue";
import ResponsiveImg from "../shared/responsive-img/ResponsiveImg.vue";
import Button from "../shared/button/Button";

import zoom from "../../directives/Zoom.js";
import PictureService from "../../domain/picture/PictureService";

export default {
  computed: {
    filteredPictures() {
      if (!this.filter) return this.pictures;
      let seeked = new RegExp(RegExp.sanitizeString(this.filter.trim()), "i");
      return this.pictures.filter(p => seeked.test(p.title));
    }
  },
  components: {
    "panel-for-picture": PanelForPicture,
    "responsive-img": ResponsiveImg,
    btn: Button
  },
  directives: {
    zoom
  },
  methods: {
    destroyPicture(picture) {
      this.pictureService.delete(picture).then(
        smsg => {
          this.pictures.destroy(picture);
          this.msg = smsg;
        },
        emsg => {
          this.msg = emsg;
        }
      );
    }
  },
  data() {
    return {
      pictures: [],
      filter: "",
      msg: ""
    };
  },
  created() {
    this.pictureService = new PictureService(this.$resource);

    this.pictureService
      .all()
      .then(pictures => (this.pictures = pictures), emsg => (this.msg = emsg));
  }
};
</script>

<style scoped>
.pictures-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pictures-list li {
  box-sizing: border-box;
  margin: 0.3em;
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.search {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 1.25em;
  margin-bottom: 0.8em;
  margin-top: 0.8em;
}

.msg {
  margin-top: 1em;
  text-align: center;
  font-size: 1.5em;
  color: #41b883;
}

.panel-actions {
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}
.panel-actions button,
.panel-actions a {
  flex-basis: 40%;
}
.panel-actions a button {
  width: 100%;
}
.description {
  margin-top: 0.5em;
  font-size: 1.1em;
  color: #41b883;
  text-shadow: 1px 2px 2px #35495e85;
}
</style>
