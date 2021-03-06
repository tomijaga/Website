import {NavOption} from 'types/option';
import {TeamName} from 'types/teams';

export const TeamPathname = {
  all: 'All',
  audit: 'Audit',
  blockchain: 'Blockchain',
  community: 'Community',
  design: 'Design',
  education: 'Education',
  frontEnd: 'Front-End',
  marketing: 'Marketing',
  websiteApi: 'Website API',
};

export const TEAMS: NavOption[] = [
  {pathname: TeamPathname.all, title: TeamName.all},
  {pathname: TeamPathname.audit, title: TeamName.audit},
  {pathname: TeamPathname.blockchain, title: TeamName.blockchain},
  {pathname: TeamPathname.community, title: TeamName.community},
  {pathname: TeamPathname.design, title: TeamName.design},
  {pathname: TeamPathname.education, title: TeamName.education},
  {pathname: TeamPathname.frontEnd, title: TeamName.frontEnd},
  {pathname: TeamPathname.marketing, title: TeamName.marketing},
  {pathname: TeamPathname.websiteApi, title: TeamName.websiteApi},
];
