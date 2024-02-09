//step-1 set
const theme = {
    components: {
      'HoverCard': {
        styles: {
          dropdown: {
            borderColor: '#005EEF',
          }
        }
      },
      'Button':{
        styles:{
          size:'5vw'
        }
      }
    }
  };

<MantineProvider theme={theme}>
      <RouterProvider router={appRouter} />
</MantineProvider>

//step-2

<HoverCard
        styles={{ root: { border: "2px solid #78aeff" } } as any}
      >
        <HoverCard.Target>
        </HoverCard.Target>
        <HoverCard.Dropdown>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}


