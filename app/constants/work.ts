import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2022',
    title: 'D.P.S.G.',
    subtitle: 'High School',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'BITS Pilani',
    subtitle: 'Computer Science, 2023–2027',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2023',
    title: 'Scaler (SST)',
    subtitle: 'Computer Science, 2023–2027',
    position: 'right',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2024',
    title: 'Mythyaverse',
    subtitle: 'Intern — Jul 2024–Feb 2025',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '2025',
    title: 'IIIT Delhi',
    subtitle: 'AI Research Intern — Feb–Aug 2025',
    position: 'right',
  }
]
