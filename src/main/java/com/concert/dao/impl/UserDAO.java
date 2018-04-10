package com.concert.dao.impl;

import com.concert.dao.IUserDAO;
import com.concert.dto.UserDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by 王明 on 2018/4/9.
 */
@Repository
public class UserDAO extends SqlSessionDaoSupport implements IUserDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    @Override
    public List<UserDTO> queryAll() {
        return getSqlSession().selectList("com.sean.oa.dto.UserMapper.queryAll");
    }

    @Override
    public UserDTO queryUser(String username) {
        return getSqlSession().selectOne("com.sean.oa.dto.UserMapper.queryUser",username);
    }


}
