import { MeshRenderer, engine, Material, Transform, VideoPlayer, pointerEventsSystem, InputAction, MeshCollider } from '@dcl/sdk/ecs'
import { Color4, Quaternion } from '@dcl/sdk/math'
import { EntityNames } from '../assets/scene/entity-names'
import { getTriggerEvents, getActionEvents } from '@dcl/asset-packs/dist/events'
import { TriggerType } from '@dcl/asset-packs'

export function main() {

  // fetch screens from editor
  const screen = engine.getEntityOrNullByName(EntityNames.Video_Screen)

  if (screen) {
  }

}