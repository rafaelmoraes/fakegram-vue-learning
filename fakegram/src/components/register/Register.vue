<template>
<main>
  <h1 v-if="picture._id" >Edit picture</h1>
  <h1 v-else>New picture</h1>
  <h2>{{ msg }}</h2>
  <form @submit.prevent="save()">
    <fieldset>
      <label for="title">Title</label>
      <input
        name="title"
        data-vv-as="title"
        v-validate
        data-vv-rules="required|min:3|max:75"
        v-model.lazy="picture.title"
        id="title"
        autocomplete="off"
      />
      <span v-show="errors.has('title')" >{{ errors.first('title') }}</span>
    </fieldset>

    <fieldset>
      <label for="url">URL</label>
      <input
        id="url"
        name="url"
        v-validate
        data-vv-rules="required|url:protocol"
        v-model.lazy="picture.url"
        autocomplete="off"
      />
      <span v-show="errors.has('url')">{{ errors.first('url') }}</span>
      <responsive-img
        :src="picture.url"
        :alt="picture.title"
        v-show="picture.url && !errors.has('url')"
      />
    </fieldset>

    <fieldset>
      <label for="description">Description</label>
      <textarea v-model.lazy="picture.description" id="description" autocomplete="off"/>
    </fieldset>

    <div class='actions'>
      <router-link :to="{name: 'home'}">
        <btn clazz="secondary">
          Back
        </btn>
      </router-link>
      <btn type="submit">
        Save
      </btn>
    </div>
  </form>
</main>
</template>

<script>
import ResponsiveImg from "../shared/responsive-img/ResponsiveImg";
import Button from "../shared/button/Button";
import Picture from "../../domain/picture/Picture";
import PictureService from "../../domain/picture/PictureService";

export default {
  components: {
    "responsive-img": ResponsiveImg,
    btn: Button
  },
  data() {
    return {
      picture: new Picture(),
      id: this.$route.params.id,
      msg: ""
    };
  },
  methods: {
    save() {
      this.$validator.validateAll().then(success => {
        if (success) {
          this.service.save(this.picture).then(smsg => {
            if (this.id) this.$router.push({ name: "home" });
            this.msg = smsg;
            this.picture = new Picture();
          }, emsg => (this.msg = emsg));
        }
      });
    }
  },
  created() {
    this.service = new PictureService(this.$resource);
    if (this.id) {
      this.service
        .findByID(this.id)
        .then(picture => (this.picture = picture), emsg => (this.msg = emsg));
    }
  }
};
</script>

<style scoped>
main {
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  align-self: center;
  display: flex;
  flex-flow: column;
  align-items: stretch;
}
h1 {
  text-transform: uppercase;
  text-align: center;
  font-size: 1.6em;
}
h2 {
  margin-top: 1em;
  text-align: center;
  font-size: 1.5em;
  color: #41b883;
}
fieldset {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  border: none;
}
fieldset label {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9em;
}
fieldset input {
  width: 100%;
  font-size: 1.25em;
  margin-bottom: 3px;
  margin-top: 3px;
}
fieldset textarea {
  width: 100%;
  font-size: 1.4em;
}
fieldset img {
  width: 100px;
  margin: 0.5rem;
}
.actions {
  display: flex;
  justify-content: space-around;
}
.actions button,
.actions a {
  flex-basis: 20%;
}
.actions a button {
  width: 99%;
}

fieldset span {
  color: #d34040f3;
}
</style>
