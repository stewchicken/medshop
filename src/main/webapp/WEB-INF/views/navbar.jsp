<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="contextPath" value="${pageContext.request.contextPath}"/>
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">                                   
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">MedShop bootstrap</a>
        </div>
        <div class="navbar-collapse collapse">  
            <ul class="nav navbar-nav">
                <li class="active"><a href="<c:url value="/" />">Home</a></li>
                <li><a href="${contextPath}/upload">Upload Excel</a> </li>
                <li><a href="${contextPath}/shoppingcart">ShoppingCart</a></li>
                <li> <a href="${contextPath}/orders">Orders</a></li>
                <li> <a href="${contextPath}/report">StatisticReport</a></li>
                    <c:if test="${pageContext.request.userPrincipal.name != null}">
                    <li><a onclick="document.forms['logoutForm'].submit()">Logout</a> </li>
                    <form accept-charset=utf-8 id="logoutForm" method="POST" action="${contextPath}/logout">
                        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
                    </form>
                </c:if>
            </ul>
        </div>   			      		 
    </div>
</div>