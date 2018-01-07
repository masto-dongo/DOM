//  DOM:DISPATCH
//  ============

//  Imports.
import { CustomEvent } from '../polyfills';
import { DOMRoot } from '../root';

//  We just dispatch the event to the DOM root.
export default function DOMDispatch (event, detail) {
  DOMRoot().dispatchEvent(new CustomEvent(typeof event === 'function' ? event.type : event, { detail }));
}
