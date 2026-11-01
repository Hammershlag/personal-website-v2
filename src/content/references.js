import { experience } from './experience';
import { projects } from './projects';
import { uses } from './uses';

// Lookup of everything a skill can point to, keyed by the element id it scrolls to.
const references = new Map([
    ...experience.map((entry) => [entry.id, { label: entry.company, kind: 'Experience' }]),
    ...projects.map((project) => [project.id, { label: project.name, kind: 'Project' }]),
    ...uses
        .filter((group) => group.id)
        .map((group) => [group.id, { label: group.heading, kind: '/uses' }]),
]);

export function resolveReference(id) {
    const reference = references.get(id);
    return reference ? { id, ...reference } : null;
}
