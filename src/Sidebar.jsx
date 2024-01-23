import trending from '../src/assets/icons/trending.svg'
import newRelease from '../src/assets/icons/newRelease.svg'
import commingSoon from '../src/assets/icons/commingSoon.svg'
import favourite from '../src/assets/icons/favourite.svg'
import watchLater from '../src/assets/icons/watchLater.svg'
const Sidebar = () => {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <img
              src={trending}
              width="24"
              height="24"
              alt="Trending"
            />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={newRelease}
              width="24"
              height="24"
              alt="New Releases"
            />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={commingSoon}
              width="24"
              height="24"
              alt="Coming Soon"
            />
            <span>Coming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={favourite}
              width="24"
              height="24"
              alt="Favourites"
            />
            <span>Favourites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <img
              src={watchLater}
              width="24"
              height="24"
              alt="Watch Later"
            />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
