import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Height of Fullscreen Window
    fullscreenWindowHeight: window.innerHeight + "px",

    // Active Window State
    activeWindow: "MyComputerWindow", 

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2, 

    windows: [
      {
        windowId: "MyComputerWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "ﾏｲ ｺﾝﾋﾟｭｰﾀ", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'MyComputer', // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "25vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "mycomputer.png", // Window Icon Image
        altText: "MyComputer", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'resume', // Window Content (used under slots)
        windowContentPadding: {
          top: '0',
          right: '0',
          bottom: '0',
          left: '0'
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "WorksWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "制作実績", // Display Name (title under icon)
        windowComponent: 'window', // Window Component (can be changed to use modified windows)
        windowContent: 'works', // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null
        }, // Window Content Padding 
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "run.png", // Window Icon Image
        altText: "works", // Window Icon Alt Text
        fullscreen: false // Window Fullscreen State [true, false]
      },
      {
        windowId: "OpenSourceWindow", 
          windowState: "close",
          displayName: "ｵｰﾌﾟﾝｿｰｽ",
          windowComponent: 'window',
          windowContent: 'opensource',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "opensource.png",
          altText: "Open Source Projects",
          fullscreen: false
      },
      {
        windowId: "HelpWindow", 
          windowState: "close",
          displayName: "ﾍﾙﾌﾟ",
          windowComponent: 'window',
          windowContent: 'help',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "help.png",
          altText: "Help",
          fullscreen: false
      },
      {
        windowId: "ShutdownWindow", 
          windowState: "close",
          displayName: "Windowsの終了",
          windowComponent: 'window',
          windowContent: 'shutdown',
          windowContentPadding: {
            top: null,
            right: '15px',
            bottom: null,
            left: '15px'
          },
          position: "absolute",
          positionX: "6vw",
          positionY: "12vh",
          iconImage: "shut-down.png",
          altText: "Shutdown",
          fullscreen: false
      },
      // register your new windows here
    ],
  },
  mutations: {
    // Active Window Mutator
    setActiveWindow(state, window) {
      console.log(window);
      state.activeWindow = window
    },

    // Pushes Active Window onto Active Windows Array
    pushActiveWindow(state, window) {
      state.activeWindows.push(window)
    },

    // Removes Active Window from Active Windows Array
    popActiveWindow(state, window) {
      const windowIndex = state.activeWindows.indexOf(window);
      if (windowIndex !== -1) {
        state.activeWindows.splice(windowIndex, 1)
      }
    },

    // Z-index increment function
    zIndexIncrement(state, windowID) {
      state.zIndex += 1
      document.getElementById(windowID).style.zIndex = state.zIndex
    },

    // Set height of max-height of fullscreen window
    setFullscreenWindowHeight(state, height) {
      state.fullscreenWindowHeight = height
    },

    updateMail(state, local) {
      state.isShownMail = local
    },
    updateMailSubject(state, local) {
      state.mailSubject = local
    },
    updateMailContent(state, local) {
      state.mailContent = local
    },
    updateMailSender(state, local) {
      state.mailSender = local
    },

    setFullscreen(state, payload) {
      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();
      window.fullscreen = payload.fullscreen;
    },

    // Window State Mutator
    setWindowState(state, payload) {
      // payload = {'windowState': 'open', 'windowID': 'WindowOne'}

      function getArrItem() {
        return state.windows.find(
          (windows) => windows.windowId === payload.windowID
        );
      }
      const window = getArrItem();

      var preventAppendingOpenWindow = false;
      if (window.windowState == "open" || window.windowState == "minimize") {
        preventAppendingOpenWindow = true;
      }

      if (payload.windowState == "open") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("zIndexIncrement", payload.windowID);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", payload.windowID);
        }, 0);
        if (preventAppendingOpenWindow == false) {
          setTimeout(() => {
            this.commit("pushActiveWindow", window);
          }, 0);
        }
      } else if (payload.windowState == "close") {
        window.windowState = payload.windowState;
        setTimeout(() => {
          this.commit("popActiveWindow", window);
        }, 0);
        setTimeout(() => {
          this.commit("setActiveWindow", "nil"); 
        }, 0);
      } else if (payload.windowState == "minimize") {
        window.windowState = payload.windowState;
        this.commit("setActiveWindow", "nil"); 
      } else {
        console.log("Error: windowState not found or invalid");
      }
    },
  },
  getters: {
    // Active Window Getter
    getActiveWindow: (state) => {
      return state.activeWindow;
    },

    // Window Getter
    getWindowById: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id);
    },

    getWindowFullscreen: (state) => (id) => {
      return state.windows.find((window) => window.windowId === id).fullscreen;
    },

    getWindows: (state) => {
      return state.windows;
    },

    getActiveWindows(state) {
      return state.activeWindows;
    },

    getFullscreenWindowHeight(state) {
      return state.fullscreenWindowHeight;
    },

    mailContent: state => {
      return state.mailContent
    },

    mailSubject: state => {
      return state.mailSubject
    },

    mailSender: state => {
      return state.mailSender
    },
  },
});
