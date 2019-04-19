package com.boot;
import static org.junit.Assert.assertEquals;
import com.boot.controller.ShipwreckController;
import com.boot.model.Shipwreck;
import com.boot.repository.ShipwreckRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

import static org.junit.Assert.assertNotEquals;
import static org.mockito.Mockito.*;

public class ShipwreckControllerTest {

    @InjectMocks
    private ShipwreckController sc;

    @Mock
    private ShipwreckRepository shipwreckRepository;

    @Mock
    private ShipwreckController shipwreckController;

    @Before
    public void init(){
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testShipwreckGet()
    {
        Shipwreck sw = new Shipwreck();
        sw.setId(4L);

        when(shipwreckController.get(4L)).thenReturn(sw);

        Shipwreck wreck =shipwreckController.get(4L);

        verify(shipwreckController).get(4L);

       // assertEquals(4L,wreck.getId().longValue());
        assertThat(wreck.getId(),is(4L));
    }

    @Test
    public void testShipwreckGetFaill()
    {
        Shipwreck sw = new Shipwreck();
        sw.setId(2L);

        when(shipwreckController.get(4L)).thenReturn(sw);

        Shipwreck wreck =shipwreckController.get(4L);

        verify(shipwreckController).get(4L);

        // assertEquals(4L,wreck.getId().longValue());
        assertNotEquals(4L,wreck.getId().longValue());
        //assertThat(wreck.getId(),is(4L));
    }

}

