<script setup lang="ts">
import { ref, useTemplateRef, computed, nextTick, onMounted } from 'vue';

import MessageItem from './MessageItem';
import type { Message } from './types';

const messages = ref<Message[]>([
    {
        from: 'author',
        name: 'Артур Хидирнабиев',
        imagePath: '/images/avtar/arthur.jpg',
        content: `Test`,
        isTyping: false,
    },
    {
        from: 'bot',
        name: 'AI Assistant',
        imagePath: '/images/avtar/ai.webp',
        content: `Test`,
        isTyping: false,
    },
    {
        from: 'author',
        name: 'Артур Хидирнабиев',
        imagePath: '/images/avtar/arthur.jpg',
        content: `Сделай описание на вакансию Senior Backend Developer на GO`,
        isTyping: false,
    },
    {
        from: 'bot',
        name: 'AI Assistant',
        imagePath: '/images/avtar/ai.webp',
        content: `<div class="markdown-body">
        <p>
            <strong>Описание вакансии: Senior Backend Developer (Go)</strong>
        </p>
        <p>
            <strong>Местоположение:</strong> [Ваш город/удаленная работа]
        </p>
        <p>
            <strong>О компании:</strong><br>
            [Краткое описание вашей компании, ее миссии, целей и ключевых проектов.
            Возможно, упоминание о команде или технологиях, с которыми работаете.]
        </p>
        <p><strong>Обязанности:</strong></p>
        <ul>
            <li>Разработка и поддержка высоконагруженных серверных приложений на
                Go.
            </li>
            <li>Оптимизация существующих систем и архитектуры для повышения
                производительности и масштабируемости.
            </li>
            <li>Участие в проектировании новых функциональных возможностей и
                интеграций.
            </li>
            <li>Работа с реляционными и нереляционными базами данных, включая
                PostgreSQL, MongoDB и другие.
            </li>
            <li>Написание чистого, поддерживаемого кода и разработка тестов для
                обеспечения его качества.
            </li>
            <li>Сотрудничество с командами разработки, тестирования и операционной
                поддержки для достижения общих целей проекта.
            </li>
            <li>Участие в код-ревью и передача знаний другим членам команды.</li>
        </ul>
        <p><strong>Требования:</strong></p>
        <ul>
            <li>Опыт работы на позиции Backend Developer не менее 5 лет.</li>
            <li>Уверенное владение языком программирования Go и его экосистемой.
            </li>
            <li>Знание принципов микросервисной архитектуры и опыт работы с
                контейнерами (Docker/Kubernetes).
            </li>
            <li>Опыт работы с API (RESTful, GraphQL) и опыт интеграции с внешними
                системами.
            </li>
            <li>Знание основных принципов проектирования баз данных и опыт работы с
                SQL и NoSQL решениями.
            </li>
            <li>Опыт работы с системами контроля версий (Git).</li>
            <li>Способность работать в команде и эффективно общаться как с
                техническими, так и с нетехническими специалистами.
            </li>
        </ul>
        <p><strong>Будет преимуществом:</strong></p>
        <ul>
            <li>Опыт работы с облачными платформами (AWS, GCP, Azure).</li>
            <li>Знания в области DevOps и CI/CD практик.</li>
            <li>Участие в open-source проектах.</li>
        </ul>
        <p><strong>Что мы предлагаем:</strong></p>
        <ul>
            <li>Конкурентоспособная заработная плата и бонусная система.</li>
            <li>Гибкий график работы и возможность удаленной работы.</li>
            <li>Участие в интересных и значимых проектах с использованием
                современных технологий.
            </li>
            <li>Дружелюбная атмосфера и поддержка коллег.</li>
            <li>Возможности для профессионального роста и обучения.</li>
        </ul>
    </div>`,
        isTyping: false,
    },
    {
        from: 'author',
        name: 'Артур Хидирнабиев',
        imagePath: '/images/avtar/arthur.jpg',
        content: `Loading`,
        isTyping: false,
    },
    {
        from: 'bot',
        name: 'AI Assistant',
        imagePath: '/images/avtar/ai.webp',
        content: ``,
        isTyping: true
    },
]);
const newMessage = ref<string>('');

const messagesWrapper = useTemplateRef('messagesWrapper');

const isMessageAddBtnDisabled = computed(() => {
    return !newMessage.value;
});

const handleAddMessageBtnClick = (): void => {
    messages.value.push({
        from: 'author',
        name: 'Артур Хидирнабиев',
        imagePath: '/images/avtar/arthur.jpg',
        content: newMessage.value,
        isTyping: false
    });

    nextTick(() => {
        newMessage.value = '';
        messagesWrapper.value.scrollTop = messagesWrapper.value.scrollHeight;
    });
};

onMounted(() => {
    if (messagesWrapper.value) {
        messagesWrapper.value.scrollTop = messagesWrapper.value.scrollHeight;
    }
})
</script>

<template>
    <div class="chat-page">
        <div class="chitchat-main">
            <div
                ref="messagesWrapper"
                class="messages custom-scroll"
            >
                <div class="chatappend">
                    <message-item
                        v-for="(message, index) in messages"
                        :key="index"
                        :message="message"
                    />
                </div>
            </div>

            <div class="message-input">
                <div class="message-input__inner">
                    <input
                        v-model="newMessage"
                        class="setemoj"
                        type="text"
                        placeholder="Текст сообщения..."
                        autocomplete="off"
                    />

                    <button
                        type="button"
                        :disabled="isMessageAddBtnDisabled"
                        class="btn btn-primary"
                        @click="handleAddMessageBtnClick"
                    >
                        <i class="fa fa-send" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.chat-page {
    .chitchat-main {
        .messages {
            @media (max-width: 600px) {
                height: calc(100vh - 80px);
                min-height: calc(100vh - 80px);
                padding: 15px;
            }
        }
    }

    .messages {
        display: block;
    }
}

.message-input {
    position: fixed;
    right: 90px;
    bottom: 0;
    left: 0;
    z-index: 9;
    width: 100%;
    padding: 24px 48px;
    background-color: #fff;

    &__inner {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-column-gap: 24px;

        @media (max-width: 600px) {
            grid-column-gap: 12px;
        }
    }

    input {
        width: 100%;
        padding-left: 12px;
        border: 0;
        font-size: 16px;
        background-color: #e5edf5;
        color: #647589;

        &:focus {
            box-shadow: none;
            outline-color: transparent !important;
        }
    }

    button.btn {
        @media (max-width: 600px) {
            padding: 15px 25px;
        }
    }

    @media (max-width: 600px) {
        height: 75px;
        padding: 12px;
    }
}
</style>
