import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {FaExchangeAlt} from 'react-icons/fa'
import {ImBriefcase} from 'react-icons/im'
import {BsBuilding} from 'react-icons/bs'
import {RiBankFill} from 'react-icons/ri'
import {FaBriefcaseMedical} from 'react-icons/fa'
import {AiFillFileText} from 'react-icons/ai'
import {MdCollections} from 'react-icons/md'


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Exchange',
    path: '/',
    icon: <FaExchangeAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Catalyst',
    path: '/',
    icon: <ImBriefcase />,
    cName: 'nav-text'
  },
  {
    title: 'CBLP',
    path: '/',
    icon: <BsBuilding />,
    cName: 'nav-text'
  },
  {
    title: 'Borrow',
    path: '/',
    icon: <RiBankFill />,
    cName: 'nav-text'
  },
  {
    title: 'Staking',
    path: '/',
    icon: <FaBriefcaseMedical />,
    cName: 'nav-text'
  },
  {
    title: 'Chronicles',
    path: '/',
    icon: <AiFillFileText />,
    cName: 'nav-text'
  },
  {
    title: 'Cobalt Collections',
    path: '/',
    icon: <MdCollections />,
    cName: 'nav-text'
  },
];
