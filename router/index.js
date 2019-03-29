import Vue from "vue";
import Router from "vue-router";
import Home from "@/screens/Home";
import Mine from "@/screens/Mine";
import Message from "@/screens/Message";
import Tab from "@/screens/Tab";
import Detail from "@/screens/Detail";
import Search from "@/screens/Search";
import Dialog from "@/screens/Dialog";
import PersonIndex from "@/screens/PersonIndex";

Vue.use(Router);

export default new Router({
  // mode: "history",
  // mode: "hash",
  routes: [
    {
      path: "/",
      component: Tab,
      name: "tab",
      meta: {
        keepAlive: true,
        savedPosition: ""
      },

      children: [
        {
          path: "home",
          component: Home,
          name: "home",
          meta: {
            keepAlive: true,
            savedPosition: ""
          }
        },
        {
          path: "mine",
          name: "mine",
          meta: {
            keepAlive: true
          },
          component: Mine
        },
        {
          path: "message",
          name: "message",
          meta: {
            keepAlive: true
          },
          component: Message
        }
      ]
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
      meta: {
        keepAlive: true,
        savedPosition: ""
      }
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/dialog",
      name: "dialog",
      component: Dialog,
      meta: {
        keepAlive: false
      }
    },
    {
      path: "/person",
      name: "person",
      component: PersonIndex,
      meta: {
        keepAlive: false
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});
