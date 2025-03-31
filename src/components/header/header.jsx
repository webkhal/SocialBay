import React from 'react'
import { Menubar } from 'primereact/menubar'; 

function Header() {
  const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        
        url: '/dashboard'
    },
    {
        label: 'Master data',
        icon: 'pi pi-search',
        items: [
            {
                label: 'users',
                icon: 'pi pi-bolt',
                url: '/users'
            },
            {
                label: 'states',
                icon: 'pi pi-server',
                url: '/states'
            },
            {
                label: 'cities',
                icon: 'pi pi-pencil',
                url: '/cities'
            },
            {
              label: 'areas',
              icon: 'pi pi-pencil',
              url: '/areas'

          },
          {
            label: 'rolecategory',
            icon: 'pi pi-pencil',
            url: '/roleCategory'
        },
        {
          label: 'roles',
          icon: 'pi pi-pencil'
      },
      {
        label: 'industrytypes',
        icon: 'pi pi-pencil'
    },
    {
      label: 'departments',
      icon: 'pi pi-pencil'
  },
  {
    label: 'employmnettypes',
    icon: 'pi pi-pencil'
},
{
  label: 'qualifications',
  icon: 'pi pi-pencil'
},
          
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
];
  return (
<>

<Menubar model={items} />

</>
)
}

export default Header