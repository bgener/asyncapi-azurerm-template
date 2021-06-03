import { File, render } from '@asyncapi/generator-react-sdk';

// Import custom components from file 
import { ArmTemplate } from '../components/common';
import { Parameters } from '../components/Parameters';
import { Variables } from '../components/Variables';
import { Resources } from '../components/Resources';


/* 
 * Each template to be rendered must have as a root component a File component,
 * otherwise it will be skipped.
 * 
 * If you don't want to render anything, you can return `null` or `undefined` and then Generator will skip the given template.
 * 
 * Below you can see how reusable chunks (components) could be called.
 * Just write a new component (or import it) and place it inside the File or another component.
 * 
 * Notice that you can pass parameters to components. In fact, underneath, each component is a pure Javascript function.
 */
export default function({ asyncapi, params }) {
  if (!asyncapi.hasComponents()) {
    return null;
  }

  // Notice that root component is the `File` component.
  return (
    <File name="deploy.json">
      <ArmTemplate>
          <ArmTemplateContent asyncapi={asyncapi} />
      </ArmTemplate>
    </File>
  );
}

function ArmTemplateContent({ asyncapi }) {
  return `
    ${render(<Parameters asyncapi={asyncapi} />)},
    ${render(<Variables asyncapi={asyncapi} />)},
    ${render(<Resources asyncapi={asyncapi} />)}
`;
}