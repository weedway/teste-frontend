<template>
<div id="editTaskModal" tabindex="-1" aria-hidden="true" class="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-screen max-h-full bg-black bg-opacity-60">
    <div class="relative w-full max-w-2xl max-h-full mx-auto mt-10">
        <div class="relative bg-white rounded-lg shadow ">
            <TaskForm :type="'edit'"/>
        </div>
    </div>
</div>
</template>