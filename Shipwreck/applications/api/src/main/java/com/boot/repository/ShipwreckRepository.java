package com.boot.repository;

import com.boot.model.Shipwreck;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ShipwreckRepository extends JpaRepository<Shipwreck,Long> {

  /*  @Query(nativeQuery = true,
            value = "Exec dbo.GetProductivitySnapshotByNodePath :#{#request.getMemberKey()}, :#{#request.getEmail()}" +
                    ", :#{#request.getDateRange().getStartDateInMonths()}" +
                    ", :#{#request.getDateRange().getEndDateInMonths()}, :#{#request.getNodePath()}"
    )
    public Integer getName(Long id);*/
}
