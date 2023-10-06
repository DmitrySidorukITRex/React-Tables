export interface NavigationItem {
  title: string;
  linksGroups: NavigationItemLinksGroup[];
}

interface NavigationItemLinksGroup {
  title: string;
  links: NavigationItemLink[];
}

interface NavigationItemLink {
  title: string;
  url: string;
}
