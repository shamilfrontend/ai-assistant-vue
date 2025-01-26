<script setup lang="ts">
import { computed, type PropType } from 'vue';

import type { Message } from '../types';

const props = defineProps({
    message: {
        type: Object as PropType<Message>,
        default: () => ({}),
    },
});

const classes = computed(() => ({
    'message': true,
    'message_bot': props.message.from === 'bot',
    'message_author': props.message.from === 'author'
}))
</script>

<template>
    <div :class="classes">
        <div class="message__grid">
            <div class="message__profile">
                <img
                    :src="message.imagePath"
                    alt="Avatar"
                    class="message__avatar"
                />
            </div>

            <div class="message__content">
                <h5 class="message__name">{{ message.name }}</h5>
                <ul class="message__list">
                    <li class="message__item">
                        <div v-if="message.isTyping" class="type">
                            <div class="typing-loader" />
                        </div>
                        <div v-html="message.content" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.message {
    width: 80%;
    margin-bottom: 24px;

    &__grid {
        display: flex;
    }

    &__profile {
        min-width: 60px;
        width: 60px;
        height: 60px;
        display: inline-block;
        border-radius: 20px;
        position: relative;

        @media (max-width: 600px) {
            min-width: 40px;
            width: 40px;
            height: 40px;
        }
    }

    &__avatar {
        display: block;
        border-radius: 50%;
    }

    &__content {
        text-align: left;
        margin-left: 18px;
        margin-right: 18px;
    }

    &__name {
        font-size: 18px;

        @media (max-width: 600px) {
            font-size: 16px;
        }
    }

    &__list {
        margin-top: 12px;
    }

    &__item {
        display: inline-block;
        padding: 15px 30px;
        font-weight: 600;
        border-radius: 20px;
        font-size: 14px;

        .typing-loader {
            &::before, &::after {
                box-shadow: 0 40px 0 #f0f;
            }
        }
    }

    &_author {
        margin-left: auto;

        .message__grid {
            flex-direction: row-reverse;
        }

        .message__content {
            flex-direction: row-reverse;
            text-align: right;
        }

        .message__item {
            background-color: #1c9dea;
            color: #fff;
        }
    }

    &_bot {
        .message__grid {
            flex-direction: row;
        }

        .message__item {
            background-color: #e5edf5;
            color: #223645;
        }
    }

    & + li {
        margin-top: 24px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
}
</style>
