<template>
    <Stories />
    <div class="col-12">
        <AnnouncementHorizontal/>
    </div>
    <div class="position-relative">
        <Feed />
    </div>
    <div class="col-12">
        <AnnouncementHorizontal/>
    </div>

</template>

<script setup>
    import Feed from '@/components/Feed.vue'
    import Stories from '@/components/Stories.vue'
    import AnnouncementHorizontal from '@/components/AnnouncementHorizontal.vue'
</script>

<style scoped>
    :deep(aside){
        margin-top: 0;
    }
</style>