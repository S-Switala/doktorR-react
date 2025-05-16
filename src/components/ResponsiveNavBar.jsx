import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../styles/responsiveNavBar.scss';

const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Usługi',
    path: '/uslugi',
    children: [
      { label: 'Bezbolesne leczenie zębów', path: '/uslugi/bezbolesne-leczenie-zebow' },
      { label: 'Profilaktyka', path: '/uslugi/profilaktyka' },
      {
        label: 'Stomatologia zachowawcza',
        children: [{ label: 'Leczenie próchnicy', path: '/uslugi/stomatologia_zachowawcza/leczenie-prochnicy' }],
      },
      {
        label: 'Endodoncja',
        children: [
          { label: 'Leczenie kanałowe pod mikroskopem', path: '/uslugi/endodoncja/leczenie-mikroskop' },
          { label: 'Powtórne leczenie kanałowe', path: '/uslugi/endodoncja/powtorne-leczenie' },
        ],
      },
      {
        label: 'Chirurgia stomatologiczna',
        children: [{ label: 'Usuwanie zębów', path: '/uslugi/chirurgia_stomatologiczna/usuwanie-zebow' }],
      },
      {
        label: 'Protetyka',
        children: [
          { label: 'Korony i mosty', path: '/uslugi/protetyka/korony' },
          { label: 'Protezy zębów', path: '/uslugi/protetyka/protezy' },
        ],
      },
      {
        label: 'Wybielanie zębów',
        children: [
         
          { label: 'Wybielanie laserem', path: '/uslugi/wybielanie_zebow/wybielanie-laserem' },
          
        ],
      },
      
      
     
      
      
      { label: 'Implanty zębów', path: '/uslugi/implanty' },
      // { label: 'Diagnostyka', path: '/uslugi/diagnostyka' },
      { label: 'Stomatologia dziecięca', path: '/uslugi/stomatologia-dziecieca' },
    ],
  },
  {
    label: 'O nas',
    path: '/o-nas',
  },
  {
    label: 'Cennik',
    path: '/cennik',
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
  },
];


const ResponsiveNavBar = ({ content }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenuLevel1, setOpenMenuLevel1] = useState(null);
  const [openMenuLevel2, setOpenMenuLevel2] = useState(null);

  const toggleMenuLevel1 = label => {
    setOpenMenuLevel1(prev => (prev === label ? null : label));
    setOpenMenuLevel2(null);
  };

  const toggleMenuLevel2 = label => {
    setOpenMenuLevel2(prev => (prev === label ? null : label));
  };

  const handleLogoClick = () => {
    if (isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
      setOpenMenuLevel1(null);
      setOpenMenuLevel2(null);
    }
  };

  const renderLinks = (links, level = 0) => (
    <ul className={`menu level-${level}`}>
      {links.map(link => {
        const isOpen =
          (level === 0 && openMenuLevel1 === link.label) ||
          (level === 1 && openMenuLevel2 === link.label);

        const hasChildren = link.children && link.children.length > 0;

        return (
          <li
            key={link.label}
            className={hasChildren ? 'nav-item-with-children' : ''}
            onMouseEnter={() => {
              if (!isMobile && hasChildren) {
                if (level === 0) {
                  setOpenMenuLevel1(link.label);
                } else if (level === 1) {
                  setOpenMenuLevel2(link.label);
                }
              }
            }}
            onMouseLeave={() => {
              if (!isMobile && hasChildren) {
                if (level === 0) {
                  setOpenMenuLevel1(null);
                } else if (level === 1) {
                  setOpenMenuLevel2(null);
                }
              }
            }}
          >
            {hasChildren ? (
              <>
                <div
                  className="menu-parent"
                  onClick={() => {
                    if (isMobile) {
                      if (level === 0) toggleMenuLevel1(link.label);
                      else if (level === 1) toggleMenuLevel2(link.label);
                    }
                  }}
                >
                  <span>{link.label}</span>
                  <ExpandMoreIcon className={`arrow-icon ${isOpen ? 'open' : ''}`} />
                </div>

                <ul className={`menu level-${level + 1} ${isOpen ? 'open' : ''}`}>
                  {link.children.map(child => {
                    const childHasChildren = child.children && child.children.length > 0;

                    return (
                      <li
                        key={child.label}
                        className={childHasChildren ? 'nav-item-with-children' : ''}
                        onMouseEnter={() => {
                          if (!isMobile && childHasChildren) {
                            setOpenMenuLevel2(child.label);
                          }
                        }}
                        onMouseLeave={() => {
                          if (!isMobile && childHasChildren) {
                            setOpenMenuLevel2(null);
                          }
                        }}
                      >
                        {childHasChildren ? (
                          <>
                            <div
                              className="menu-parent"
                              onClick={() => {
                                if (isMobile) toggleMenuLevel2(child.label);
                              }}
                            >
                              <span>{child.label}</span>
                              <ExpandMoreIcon
                                className={`arrow-icon ${
                                  openMenuLevel2 === child.label ? 'open' : ''
                                }`}
                              />
                            </div>
                            <ul
                              className={`menu level-${level + 2} ${
                                openMenuLevel2 === child.label ? 'open' : ''
                              }`}
                            >
                              {child.children.map(subchild => (
                                <li key={subchild.label} className='subChild'>
                                  <Link
                                    to={subchild.path}
                                    onClick={() => isMobile && setMobileMenuOpen(false)}
                                    className={
                                      location.pathname === subchild.path ? 'active' : ''
                                    }
                                  >
                                    {subchild.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            to={child.path}
                            onClick={() => isMobile && setMobileMenuOpen(false)}
                            className={
                              location.pathname === child.path ? 'active' : ''
                            }
                          >
                            {child.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <Link
                to={link.path}
                onClick={() => isMobile && setMobileMenuOpen(false)}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="responsive-navbar">
      <div className="top-bar">
        <div className="wrapper">
          <div className="logo">
            <Link to="/" onClick={handleLogoClick}>
              <img
                src={isMobile ? '/img/logo_mobile.png' : '/img/logo_pc.png'}
                alt="logo"
                className="logo-img"
              />
            </Link>
          </div>

          {isMobile ? (
            <button className="burger" onClick={() => setMobileMenuOpen(prev => !prev)}>
              <MenuIcon fontSize="large" />
            </button>
          ) : (
            <nav className="main-nav desktop">{renderLinks(navLinks)}</nav>
          )}
        </div>
      </div>

      {isMobile && (
        <nav className={`main-nav mobile ${mobileMenuOpen ? 'open' : ''}`}>
          {renderLinks(navLinks)}
        </nav>
      )}
      <div style={{ paddingTop: '64.8px' }}>{content}</div>
    </div>
  );
};

export default ResponsiveNavBar;

