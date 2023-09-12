import { NavLink } from 'react-router-dom';
import { route } from '@/routes';

interface Props {
  name: string;
  children: React.ReactNode;
}

const NamedLink = ({ name, children }: Props) => {
  return (
    <NavLink
      end
      to={route(name)}
      className={({ isActive }) =>
        isActive ? 'text-blue-600 underline' : 'text-blue-600'
      }
    >
      {children}
    </NavLink>
  );
};

export default NamedLink;
