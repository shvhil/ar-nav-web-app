import { initialize } from "@zcomponent/three";
import { default as Scene } from "./Scene.zcomp";

new URL("./fonts/Adero-Medium.otf", import.meta.url).href

initialize(Scene, {}, {
    launchButton: document.getElementById('launchButton')
});
