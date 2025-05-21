import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useApp } from '../../context/AppContext';

const navigation = [
  { name: 'Home', to: '/', current: true },
  { 
    name: 'Vocabulary', 
    to: '/vocabulary',
    dropdown: [
      { name: 'Strong verb and Week Verb', to: '/vocabulary/3-forms-of-verb' },
      { name: 'Vocabulary for Connectors', to: '/vocabulary/connectors' },
      { name: 'Others', to: '/vocabulary/others' }
    ]
  },
  { 
    name: 'Grammar', 
    to: '/grammar',
    dropdown: [
      { name: 'Sentences', to: '/grammar/sentences' },
      { name: 'Auxiliary verb', to: '/grammar/auxiliary-verb' },
      { name: 'Tense in one page', to: '/grammar/tense' },
      { name: 'Case', to: '/grammar/case' }
    ]
  },
  { 
    name: 'Writing', 
    to: '/writing',
    dropdown: [
      { name: 'Paragraph malty', to: '/writing/paragraph' },
      { name: 'Padma Bridge - Paragraph', to: '/writing/padma-bridge' },
      { name: 'Covid-19 Paragraph', to: '/writing/covid19' },
      { name: 'Application', to: '/writing/application' }
    ]
  },
  { 
    name: 'Syllabus', 
    to: '/syllabus',
    dropdown: [
      { name: 'HSC', to: '/syllabus/hsc' },
      { name: 'SSC', to: '/syllabus/ssc' },
      { name: 'JSC', to: '/syllabus/jsc' }
    ]
  },
  { name: 'Courses', to: '/courses', current: false },
  { name: 'Study Materials', to: '/documents', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { state, updateState } = useApp();

  const setIsModalOpen = (value) => {
    updateState({ isModalOpen: value });
  };

  return (
    <Disclosure as="nav" className="bg-blue-600 fixed w-full top-0 z-50 py-1">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-12 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and navigation */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-full border-2 border-red-500"
                    src="/images/logo.png"
                    alt="English Club"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div key={item.name} className="relative group">
                        {item.dropdown ? (
                          <div className="relative">
                            <Link
                              to={item.to}
                              className="text-white hover:bg-blue-700 rounded-md px-3 py-2 text-sm font-medium"
                            >
                              {item.name}
                            </Link>
                            <div className="absolute hidden group-hover:block w-48 bg-white rounded-md shadow-lg py-1 z-50">
                              {item.dropdown.map((dropItem) => (
                                <Link
                                  key={dropItem.name}
                                  to={dropItem.to}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {dropItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            to={item.to}
                            className={classNames(
                              item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side buttons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex items-center space-x-4">
                  <button className="text-white hover:bg-blue-700 rounded-md px-3 py-2 text-sm font-medium">
                    Search
                  </button>
                  {state.user ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-blue-700 text-sm focus:outline-none">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={state.user.imageUrl || "/images/default-avatar.png"}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#profile"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#signout"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <Disclosure.Button
                        className="text-white hover:bg-blue-700 block rounded-md px-3 py-2 text-base font-medium w-full text-left"
                      >
                        {item.name}
                      </Disclosure.Button>
                      <div className="pl-4">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.to}
                            className="text-white hover:bg-blue-700 block rounded-md px-3 py-2 text-sm"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Disclosure.Button
                      as={Link}
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-blue-700 text-white' : 'text-white hover:bg-blue-700',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 