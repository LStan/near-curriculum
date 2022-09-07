export function toggleLoaderAnimation(ws) {
  ws.send(parse({ event: 'toggle-loader-animation' }));
}

/**
 * Update all tests in the tests state
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {Test[]} tests Array of Test objects
 */
export function updateTests(ws, tests) {
  ws.send(parse({ event: 'update-tests', data: { tests } }));
}
/**
 * Update single test in the tests state
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {Test} test Test object
 */
export function updateTest(ws, test) {
  ws.send(parse({ event: 'update-test', data: { test } }));
}
/**
 * Update the lesson description
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {string} description Lesson description
 */
export function updateDescription(ws, description) {
  ws.send(parse({ event: 'update-description', data: { description } }));
}
/**
 * Update the heading of the lesson
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {string} projectHeading Project heading
 */
export function updateProjectHeading(ws, projectHeading) {
  ws.send(
    parse({
      event: 'update-project-heading',
      data: projectHeading
    })
  );
}
/**
 * Update the project state
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {Project} project Project object
 */
export function updateProject(ws, project) {
  ws.send(
    parse({
      event: 'update-project',
      data: project
    })
  );
}
/**
 * Update hints
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {string} hints `\n` separated string
 */
export function updateHints(ws, hints) {
  ws.send(parse({ event: 'update-hints', data: { hints } }));
}
/**
 *
 * @param {WebSocket} ws WebSocket connection to the client
 * @param {*} cons
 */
export function updateConsole(ws, cons) {
  ws.send(parse({ event: 'update-console', data: { cons } }));
}

export function parse(obj) {
  return JSON.stringify(obj);
}