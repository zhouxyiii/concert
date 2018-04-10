package com.concert.service;

import com.concert.dto.AssortmentDTO;

import java.util.List;

/**
 * Created by Administrator on 2018/4/10.
 */
public interface IAssortmentService {

    List<AssortmentDTO> queryAssortment();

    void save(AssortmentDTO assortmentDTO);

    void update(String newName, String oldName);

    void delete(Integer sortId);
}
