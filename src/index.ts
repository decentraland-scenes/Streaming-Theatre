import { MeshRenderer, engine, Material, Transform, VideoPlayer, pointerEventsSystem, InputAction, MeshCollider } from '@dcl/sdk/ecs'
import { Color4, Quaternion } from '@dcl/sdk/math'

export function main() {
	const videoPlayerEntity = engine.addEntity()
	VideoPlayer.create(videoPlayerEntity, {
		src: 'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875',
		playing: true,
		volume: 1.0
	})

	const screen = engine.addEntity()
	Transform.create(screen, {
		position: { x: 117, y: 20.5, z: 80 },
		scale: { x: 38.4, y: 21.6, z: 1 },
		rotation: Quaternion.fromEulerDegrees(0, 90, 0)
	})
	MeshRenderer.setPlane(screen)
	MeshCollider.setPlane(screen)
	Material.setBasicMaterial(screen, {
		texture: Material.Texture.Video({ videoPlayerEntity: videoPlayerEntity })
	})



	pointerEventsSystem.onPointerDown(
		{
			entity: screen,
			opts: {
				button: InputAction.IA_POINTER,
				hoverText: 'Play/pause'
			}
		},
		() => {
			const videoPlayer = VideoPlayer.getMutable(videoPlayerEntity)
			videoPlayer.playing = !videoPlayer.playing
		}
	)
}