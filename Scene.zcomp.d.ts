import { ZComponent, ContextManager, Observable, Animation, Layer, LayerClip, Event } from "@zcomponent/core";

import { HTML as HTML_0 } from "@zcomponent/three/lib/components/HTML";
import { CSS as CSS_1 } from "@zcomponent/html/lib/CSS";
import { CameraEnvironmentMap as CameraEnvironmentMap_2 } from "@zcomponent/zappar-three/lib/components/environments/CameraEnvironmentMap";
import { Text as Text_3 } from "@zcomponent/three/lib/components/text/Text";
import { Option as Option_4 } from "./option";
import { ActivateState as ActivateState_5 } from "@zcomponent/core/lib/behaviors/ActivateState";
import { GLTF as GLTF_6 } from "@zcomponent/three/lib/components/models/GLTF";
import { DefaultCookieConsent as DefaultCookieConsent_7 } from "@zcomponent/core/lib/components/DefaultCookieConsent";
import { DefaultLoader as DefaultLoader_8 } from "@zcomponent/core/lib/components/DefaultLoader";
import { Group as Group_9 } from "@zcomponent/three/lib/components/Group";
import { DirectionalLight as DirectionalLight_10 } from "@zcomponent/three/lib/components/lights/DirectionalLight";
import { Div as Div_11 } from "@zcomponent/html/lib/div";
import { H2 as H2_12 } from "@zcomponent/html/lib/headings";
import { Img as Img_13 } from "@zcomponent/html/lib/img";
import { ImmersalAnchorGroup as ImmersalAnchorGroup_14 } from "@zcomponent/immersal/lib/components/ImmersalAnchorGroup";
import { CallFunction as CallFunction_15 } from "@zcomponent/core/lib/behaviors/CallFunction";
import { LookAtNode as LookAtNode_16 } from "@zcomponent/three/lib/components/transforms/LookAtNode";
import { CameraTransform as CameraTransform_17 } from "@zcomponent/three/lib/components/transforms/CameraTransform";
import { Select as Select_18 } from "./selectWithPlaceholder";
import { ShadowPlane as ShadowPlane_19 } from "@zcomponent/three/lib/components/meshes/ShadowPlane";
import { WorldTracker as WorldTracker_20 } from "@zcomponent/zappar-three/lib/components/trackers/WorldTracker";
import { WorldTrackingUI as WorldTrackingUI_21 } from "@zcomponent/zappar-three/lib/components/WorldTrackingUI";
import { ZapparCamera as ZapparCamera_22 } from "@zcomponent/zappar-three/lib/components/cameras/Camera";
import { H4 as H4_23 } from "@zcomponent/html/lib/headings";
import { Button as Button_24 } from "@zcomponent/html/lib/button";

interface ConstructorProps {

}

/**
* @zcomponent
* @zicon zcomponent
*/
declare class Comp extends ZComponent {

	constructor(contextManager: ContextManager, constructorProps: ConstructorProps);

	nodes: {
		Aura_InteractiveTopLogo: HTML_0 & {
			behaviors: {

			}
		},
		Bottom_OverlayCSS: CSS_1 & {
			behaviors: {

			}
		},
		CSS: CSS_1 & {
			behaviors: {

			}
		},
		CameraEnvironmentMap: CameraEnvironmentMap_2 & {
			behaviors: {

			}
		},
		ConferenceTarget_Label: Text_3 & {
			behaviors: {

			}
		},
		Conference_RoomOption: Option_4 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Conference_Target: GLTF_6 & {
			behaviors: {

			}
		},
		DefaultCookieConsent: DefaultCookieConsent_7 & {
			behaviors: {

			}
		},
		DefaultLoader: DefaultLoader_8 & {
			behaviors: {

			}
		},
		Defaults: Group_9 & {
			behaviors: {

			}
		},
		DirectionalLight: DirectionalLight_10 & {
			behaviors: {

			}
		},
		Div: Div_11 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		EntranceTarget_Label: Text_3 & {
			behaviors: {

			}
		},
		Entrance_Option: Option_4 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Entrance_Target: GLTF_6 & {
			behaviors: {

			}
		},
		H2: H2_12 & {
			behaviors: {

			}
		},
		Img: Img_13 & {
			behaviors: {

			}
		},
		ImmersalAnchorGroup: ImmersalAnchorGroup_14 & {
			behaviors: {

			}
		},
		Lobby_Option: Option_4 & {
			behaviors: {
				0: CallFunction_15,
				Call_ActivateState_perform: CallFunction_15,
			}
		},
		LookAtNode: LookAtNode_16 & {
			behaviors: {

			}
		},
		Mode_SelectedDestinationIndicatorText: HTML_0 & {
			behaviors: {

			}
		},
		Navigation_Arrow: CameraTransform_17 & {
			behaviors: {

			}
		},
		Select_POI: Select_18 & {
			behaviors: {

			}
		},
		ShadowPlane: ShadowPlane_19 & {
			behaviors: {

			}
		},
		Workspace_Option: Option_4 & {
			behaviors: {

			}
		},
		WorldTracker: WorldTracker_20 & {
			behaviors: {

			}
		},
		WorldTrackingUI: WorldTrackingUI_21 & {
			behaviors: {

			}
		},
		ZapparCamera: ZapparCamera_22 & {
			behaviors: {

			}
		},
		arrow_01_glb: GLTF_6 & {
			behaviors: {

			}
		},
		tutorialOverlay_css: CSS_1 & {
			behaviors: {

			}
		},
		Tutorial_Text: H4_23 & {
			behaviors: {

			}
		},
		Explore_Button: Button_24 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Glassmorphism_BottomUIDropdown: HTML_0 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Glass_InitialButtons: HTML_0 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Div_2: Div_11 & {
			behaviors: {

			}
		},
		glassIntital_css: CSS_1 & {
			behaviors: {

			}
		},
		Explore_Button0: Button_24 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Div_3: Div_11 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Entrance: Button_24 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Conference: Button_24 & {
			behaviors: {
				0: ActivateState_5,
				ActivateState: ActivateState_5,
			}
		},
		Tutorial_Text0: H4_23 & {
			behaviors: {

			}
		},
	};

	animation: Animation & { layers: {
		Explore_ShowAllLabels: Layer & { clips: {
			Explore_ModeTrigger0: LayerClip;
			Towards_Entrance: LayerClip;
			Towards_Conference: LayerClip;
		}};
		DisableTutorial: Layer & { clips: {
			TutorialToggle0: LayerClip;
		}};
	}};

	/**
	 * The position, in 3D space, of this node relative to its parent. The three elements of the array correspond to the `x`, `y`, and `z` components of position.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public position: Observable<[x: number, y: number, z: number]>;

	/**
	 * The rotation, in three dimensions, of this node relative to its parent. The three elements of the array correspond to Euler angles - yaw, pitch and roll.
	 * 
	 * @zprop
	 * @zdefault [0,0,0]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public rotation: Observable<[x: number, y: number, z: number]>;

	/**
	 * The scale, in three dimensions, of this node relative to its parent. The three elements of the array correspond to scales in the the `x`, `y`, and `z` axis.
	 * 
	 * @zprop
	 * @zdefault [1,1,1]
	 * @zgroup Transform
	 * @zgrouppriority 10
	 */
	public scale: Observable<[x: number, y: number, z: number]>;

	/**
	 * Determines if this object and its children are rendered to the screen.
	 * 
	 * @zprop
	 * @zdefault true
	 * @zgroup Appearance
	 * @zgrouppriority 11
	 */
	public visible: Observable<boolean>;
}

export default Comp;
