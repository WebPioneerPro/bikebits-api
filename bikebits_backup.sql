--
-- PostgreSQL database dump
--

\restrict vyFhj1aA3jyfnhh9Q6atrRi3Tn90UaLQszemUfgCaQuTVv8dSiorYNiA3fecQWf

-- Dumped from database version 15.15
-- Dumped by pg_dump version 15.15

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: brands; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brands (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_on timestamp with time zone DEFAULT now() NOT NULL,
    created_by uuid,
    updated_on timestamp with time zone DEFAULT now() NOT NULL,
    updated_by uuid,
    is_active boolean DEFAULT true NOT NULL,
    brand_name character varying NOT NULL
);


ALTER TABLE public.brands OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_on timestamp with time zone DEFAULT now() NOT NULL,
    created_by uuid,
    updated_on timestamp with time zone DEFAULT now() NOT NULL,
    updated_by uuid,
    is_active boolean DEFAULT true NOT NULL,
    category_name character varying NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_on timestamp with time zone DEFAULT now() NOT NULL,
    created_by uuid,
    updated_on timestamp with time zone DEFAULT now() NOT NULL,
    updated_by uuid,
    is_active boolean DEFAULT true NOT NULL,
    product_name character varying NOT NULL,
    hsn_code character varying,
    shelf_position character varying,
    category_id uuid NOT NULL,
    brand_id uuid NOT NULL,
    quantity integer DEFAULT 0 NOT NULL,
    price numeric(10,2) NOT NULL,
    compatible_vehicles uuid[]
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: vehicles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vehicles (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    created_on timestamp with time zone DEFAULT now() NOT NULL,
    created_by uuid,
    updated_on timestamp with time zone DEFAULT now() NOT NULL,
    updated_by uuid,
    is_active boolean DEFAULT true NOT NULL,
    vehicle_name character varying NOT NULL
);


ALTER TABLE public.vehicles OWNER TO postgres;

--
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brands (id, created_on, created_by, updated_on, updated_by, is_active, brand_name) FROM stdin;
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, created_on, created_by, updated_on, updated_by, is_active, category_name) FROM stdin;
e361a203-ff0e-497d-a95a-2f61cd046d16	2026-01-13 16:48:06.172755+00	\N	2026-01-13 16:48:06.172755+00	\N	t	Brake Shoes
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, created_on, created_by, updated_on, updated_by, is_active, product_name, hsn_code, shelf_position, category_id, brand_id, quantity, price, compatible_vehicles) FROM stdin;
\.


--
-- Data for Name: vehicles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.vehicles (id, created_on, created_by, updated_on, updated_by, is_active, vehicle_name) FROM stdin;
\.


--
-- Name: products PK_0806c755e0aca124e67c0cf6d7d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id);


--
-- Name: vehicles PK_18d8646b59304dce4af3a9e35b6; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vehicles
    ADD CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY (id);


--
-- Name: categories PK_24dbc6126a28ff948da33e97d3b; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY (id);


--
-- Name: brands PK_b0c437120b624da1034a81fc561; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT "PK_b0c437120b624da1034a81fc561" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict vyFhj1aA3jyfnhh9Q6atrRi3Tn90UaLQszemUfgCaQuTVv8dSiorYNiA3fecQWf

