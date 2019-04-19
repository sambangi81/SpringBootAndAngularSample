package com.boot.controller;

//import jdk.nashorn.internal.ir.RuntimeNode;
import com.boot.repository.ShipwreckRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.boot.model.Shipwreck;
@RestController
@RequestMapping("api/v1/")
public class ShipwreckController {

    @Autowired
    private ShipwreckRepository shipwreckRepository;

    @RequestMapping(value = "shipwrecks", method = RequestMethod.GET)
    public List<Shipwreck> list(){

        //return ShipwreckStub.list();
        return shipwreckRepository.findAll();
    }

    @RequestMapping(value = "shipwrecks", method = RequestMethod.POST)
    public Shipwreck create(@RequestBody Shipwreck shipwreck){

        //return ShipwreckStub.create(shipwreck);
        return shipwreckRepository.saveAndFlush(shipwreck);
    }

    @RequestMapping(value =  "shipwrecks/{id}" ,method = RequestMethod.GET)
    public Shipwreck get(@PathVariable Long id){
        //return ShipwreckStub.get(id);
        //return shipwreckRepository..getOne(id);
        Optional<Shipwreck> result = shipwreckRepository.findById(id);
        if(result.isPresent())
            return result.get();
       return new Shipwreck();
    }

    @RequestMapping(value = "shipwrecks/{id}" ,method = RequestMethod.PUT)
    public Shipwreck update(@PathVariable Long id, @RequestBody Shipwreck shipwreck){
        //return ShipwreckStub.update(id,shipwreck);
        //Shipwreck existingShipwreck = shipwreckRepository.getOne(id);
        Shipwreck existingShipwreck;
        Optional<Shipwreck> result = shipwreckRepository.findById(id);
        if(result.isPresent()) {
            existingShipwreck=result.get();
            BeanUtils.copyProperties(shipwreck, existingShipwreck);
            return shipwreckRepository.saveAndFlush(existingShipwreck);
        }
        return new Shipwreck();

    }

    @RequestMapping(value = "shipwrecks/{id}", method=RequestMethod.DELETE)
    public Shipwreck delete(@PathVariable Long id){

        //return ShipwreckStub.delete(id);
        //Shipwreck existingShipwreck = shipwreckRepository.getOne(id);
        //shipwreckRepository.delete(existingShipwreck);
        Shipwreck existingShipwreck;
        Optional<Shipwreck> result = shipwreckRepository.findById(id);
        if(result.isPresent()) {
            existingShipwreck=result.get();
            shipwreckRepository.delete(existingShipwreck);
            return existingShipwreck;
        }
        //shipwreckRepository.deleteById(id);
        //return existingShipwreck;
        return new Shipwreck();
    }

}
