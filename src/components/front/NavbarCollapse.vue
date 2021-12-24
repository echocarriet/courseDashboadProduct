<template>
  <div class="collapse navbar-collapse" id="navbarNav" ref="bsCollapse">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">後台登入</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import CollapseMixin from '@/mixins/CollapseMixin';

export default {
  mixins: [CollapseMixin],
};
</script>
