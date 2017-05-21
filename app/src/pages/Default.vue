<template>
	<div>
	<div class="centerBox absolute">
	    <Publish></Publish>
	    <CenterNav></CenterNav>
	    <CenterBody></CenterBody>
	</div>
	<Right></Right>
	</div>
</template>


<script>
import Publish from './center_body/Publish'
import CenterNav from './center_body/CenterNav'
import CenterBody from './center_body/CenterBody'
import Right from './right_side/Right'
export default {
  name: 'default',
  data () {
    return {}
  },
  components: {
  	Publish,
  	CenterNav,
  	CenterBody,
  	Right
  }
}
</script>