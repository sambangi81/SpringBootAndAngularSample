package com.boot;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import com.boot.controller.HomeController;
import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void HomeTest()
    {
        HomeController hc = new HomeController();
        String result=hc.home();
        assertEquals(result,"Das boot, reporting for duty!" );
    }
}
